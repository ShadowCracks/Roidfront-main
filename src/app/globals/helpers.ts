function queryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value != null) { 
      searchParams.append(key, value.toString());
    }
  }

  return searchParams.toString();
}

export { queryString };