import { serverApi } from '@server/http';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const response = await serverApi.get(`movie/${id}?language=pt-BR`);
  return NextResponse.json(response.data);
}
