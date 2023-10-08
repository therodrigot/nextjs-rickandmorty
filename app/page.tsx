"use client"
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Pagination from "@/components/Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const readOnlySearchParams = useSearchParams()!

  const [apiResult, setapiResult] = useState([])
  const [currentPage, setCurrentPage] = useState<number>(parseInt(readOnlySearchParams.get('page')) || 1)
  const [totalPages, setTotalPages] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSelectedItem, setCurrentSelectedItem] = useState();

  useEffect(function () {
    callAPI()
  }, [, currentPage]);

  async function callAPI() {
    let url = "https://rickandmortyapi.com/api/character/?page=" + currentPage;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTotalPages(data.info.pages);
      setapiResult(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(Object.fromEntries(readOnlySearchParams))
      params.set(name, value)
      return params.toString()
    },
    [readOnlySearchParams]
  )

  const changePage = (newPage) => {
    const tmp = Math.min(totalPages, Math.max(1, newPage));
    setCurrentPage(tmp);
    router.push(`${pathname}?${createQueryString("page", tmp.toString())}`);
  };

  return (
    <>
      <div className="container mx-auto p-5">

        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {apiResult.map((value: any, i) => {
            return <Card
              key={value.id}
              name={value.name}
              image={value.image}
              handleClick={() => {
                setIsModalOpen(true);
                setCurrentSelectedItem(value);
              }}
            />
          })}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(newPage) => changePage(newPage)} />

        <Modal
          data={currentSelectedItem}
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)} />

      </div>
    </>
  )
}
