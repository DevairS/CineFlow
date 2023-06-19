import { serverApi } from '@server/http';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const query = searchParams.get('query');

  const defaultPath = '/movie?language=pt-BR&page=';
  const url = query
    ? `search${defaultPath}${page}&query=${query}`
    : `discover${defaultPath}${page}`;

  const response = await serverApi.get(url);

  return NextResponse.json(response.data);
}
