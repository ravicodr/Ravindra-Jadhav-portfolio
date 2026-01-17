import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Stats from '@/models/Stats';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    let stats = await Stats.findOne();

    // Create default stats if none exist
    if (!stats) {
      stats = await Stats.create({
        experience: 4,
        dau: 10,
        apiRequests: 100,
        projectsCompleted: 25,
      });
    }

    return NextResponse.json({ stats }, { status: 200 });
  } catch (error: any) {
    console.error('Stats GET error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user?.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();
    await connectDB();

    let stats = await Stats.findOne();

    if (!stats) {
      stats = await Stats.create(body);
    } else {
      stats = await Stats.findOneAndUpdate(
        {},
        { ...body, updatedAt: Date.now() },
        { new: true }
      );
    }

    return NextResponse.json(
      { message: 'Stats updated successfully', stats },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Stats PUT error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update stats' },
      { status: 500 }
    );
  }
}
