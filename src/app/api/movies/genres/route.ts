import { serverApi } from '@server/http';
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await serverApi.get('genre/movie/list?language=pt-BR');
  return NextResponse.json(response.data);
}
