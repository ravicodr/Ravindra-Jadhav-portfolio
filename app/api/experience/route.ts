import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Experience from '@/models/Experience';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const experiences = await Experience.find({ isActive: true })
      .sort({ order: 1, startDate: -1 });

    return NextResponse.json({ experiences }, { status: 200 });
  } catch (error: any) {
    console.error('Experience GET error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch experiences' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
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

    const experience = await Experience.create(body);

    return NextResponse.json(
      { message: 'Experience added successfully', experience },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Experience POST error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to add experience' },
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

    const { id, ...updateData } = await req.json();
    await connectDB();

    const experience = await Experience.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!experience) {
      return NextResponse.json(
        { error: 'Experience not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Experience updated successfully', experience },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Experience PUT error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update experience' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user?.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Experience ID is required' },
        { status: 400 }
      );
    }

    await connectDB();

    await Experience.findByIdAndUpdate(id, { isActive: false });

    return NextResponse.json(
      { message: 'Experience deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Experience DELETE error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete experience' },
      { status: 500 }
    );
  }
}
