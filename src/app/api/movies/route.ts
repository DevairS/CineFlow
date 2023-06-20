import { serverApi } from '@server/http';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const query = searchParams.get('query');

  const currentPage = page ? +page : '1';
  const pageToRequest = +currentPage === 1 ? 1 : Math.ceil(+currentPage / 4);
  const defaultPath = '/movie?language=pt-BR&page=';
  const url = query
    ? `search${defaultPath}${pageToRequest || 1}&query=${query}`
    : `discover${defaultPath}${pageToRequest || 1}`;

  const response = await serverApi.get(url);
  return NextResponse.json(response.data);
}
