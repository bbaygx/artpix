
"use client";

import { useState, useRef } from 'react';
import { fetchData } from "../../hooks/useFetch"


export default function Neko() {

  const [toggle, setToggle] = useState<Boolean>(false)

  const { data, isLoading, isError, isSuccess, refetch } = fetchData('sfw', 'neko', 30); // Mengambil 30 gambar

  // useEffect(()=> {
  //   refetch()
  // },[])

  if (isSuccess) {

    const handleModalShow = (i: number) => {
      const modal = document.getElementById(`my_modal_${i}`) as HTMLDialogElement;
      modal.showModal();
    };

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {data.map((data: any, i: number) => (
            <div  key={i} onClick={() =>  handleModalShow(i)}>

              <img src={data} alt="" className="hover:shadow-xl hover:duration-200" />
              <dialog id={`my_modal_${i}`} className="modal">
                <div className="modal-box p-0">
                  <img src={data} alt="" className="hover:shadow-xl hover:duration-200" />
                  {/* <p className="py-4">Press ESC key or click outside to close</p> */}
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          ))}
        </div>
      </>
    )
  }
}
