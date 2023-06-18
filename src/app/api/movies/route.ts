import { serverApi } from '@server/http';
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await serverApi.get('discover/movie?language=pt-BR&page=1');
  return NextResponse.json(response.data);
}
