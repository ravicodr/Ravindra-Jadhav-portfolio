import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const projects = await Project.find({ isActive: true })
      .sort({ order: 1, createdAt: -1 });

    return NextResponse.json({ projects }, { status: 200 });
  } catch (error: any) {
    console.error('Projects GET error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch projects' },
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

    const project = await Project.create(body);

    return NextResponse.json(
      { message: 'Project added successfully', project },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Project POST error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to add project' },
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

    const project = await Project.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Project updated successfully', project },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Project PUT error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update project' },
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
        { error: 'Project ID is required' },
        { status: 400 }
      );
    }

    await connectDB();

    await Project.findByIdAndUpdate(id, { isActive: false });

    return NextResponse.json(
      { message: 'Project deleted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Project DELETE error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete project' },
      { status: 500 }
    );
  }
}
