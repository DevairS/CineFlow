import { serverApi } from '@server/http';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const response = await serverApi.get(
    `discover/movie?language=pt-BR&page=${page}`
  );
  return NextResponse.json(response.data);
}
