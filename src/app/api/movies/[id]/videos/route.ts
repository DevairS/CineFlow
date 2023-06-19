import { serverApi } from '@server/http';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { data } = await serverApi.get(`movie/${id}/videos?language=pt-BR`);
  return NextResponse.json(data.results);
}
