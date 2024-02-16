import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchUsers } from '../service/users';
import { type User } from '../types.d';

export const useUsers = () => {
  // isFetching puede servier para avisar que estamos cargando los datos
  const { isLoading, isError,/*{isFetching},*/ data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{ nextCursor?: number, users: User[] }>({
    queryKey: ['users'], // <- la key de la información o de la query
    queryFn: fetchUsers,
      getNextPageParam: (lastPage) => lastPage.nextCursor,//<- valor de la siguiente pagina
      refetchOnWindowFocus:false,//<-Saca la info del fetch para que no haga un refetching automatico cuando desenfoco la pagina,(se actualiza).
      // Podemos sacarlo de otro lado no necesariamente del fetch
      staleTime: 1000 * 3,//tiempo para que los datos sean viejos y se haga un refetch automatico(stale)refetchOnWindowFocus
  }
  )

  return {
    refetch,
    fetchNextPage,
    isLoading,
    isError,
    users: data?.pages.flatMap(page => page.users) ?? [],// cuando activofetchNextPage uno los valores
    hasNextPage
  }
}