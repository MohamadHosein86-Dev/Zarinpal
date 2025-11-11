"use client";
import Modal from "@/app/components/modal/Modal";
import { Button } from "@/app/components/ui/button";
import { updateUser } from "@/app/services/api";
import { X } from "lucide-react";
import React, { useRef, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";

export default function EditeUser({ keyUser, value, id, refetch }: { id: string; keyUser: string; value: string; refetch: () => void }) {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoaing] = useState<boolean>(false);

  const valueRef = useRef<string>("");
  const isDisabledRef = useRef<boolean>(true);
  const [dummy, setDummy] = useState(0);

  function handleChange(x: React.ChangeEvent<HTMLInputElement>) {
    valueRef.current = x.target.value;
    if (isDisabledRef.current && x.target.value.trim() !== "") {
      isDisabledRef.current = false;
      setDummy((res) => res + 1);
    }
  }
  async function handleSubmit(x: React.FormEvent<HTMLFormElement>) {
    x.preventDefault();
    setLoaing(true);
    const value = valueRef.current;
    const field = keyUser;
    const userId = id;
    await updateUser({ value, field, userId });
    refetch();
    setLoaing(false);
    setOpen(false);
  }
  return (
    <div className="  py-6 px-6 border-black/5 border-b-2 border-l-2 flex flex-col  ">
      <p className="  text-md text-gray-500 ">{keyUser} </p>
      <div className=" flex items-center justify-between ">
        <div className="  py-2 text-lg">{value}</div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <form onSubmit={handleSubmit} className=" relative bg-white p-4 w-110 h-100  rounded-xl ">
            <div className=" p-3 ">
              <div className=" flex justify-between items-center  border-b border-black/5 pb-3 mb-4 ">
                <h3 className=" font-medium ">ثبت اطلاعات شناسایی</h3>
                <X onClick={() => setOpen(false)} className="w-5 cursor-pointer h-5 text-gray-600" />
              </div>
              <p className=" text-sm ">لطفا اطلاعات شناسایی خود را وارد کنید. نام و نام خانوادگی شما باید با اطلاعاتی که وارد می‌کنید همخوانی داشته باشند.</p>
              <div className=" flex flex-col gap-1 mt-6 ">
                <label htmlFor="">
                  {keyUser} <span className=" text-[#ef4056] ">*</span>
                </label>
                <input onChange={handleChange} className=" p-2 w-full border-2 focus:border-[#19bfd0] border-black/5 rounded-xl " type="text" defaultValue={value} />
              </div>
            </div>
            <Button disabled={isDisabledRef.current} type="submit" className={` absolute left-40 bottom-4    bg-blue-700   text-white font-medium cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 `}>
              {loading ? "loading ... " : " بررسی اطلاعات"}
            </Button>
          </form>
        </Modal>
        <RiEdit2Line onClick={() => setOpen((res) => !res)} className="text-xl cursor-pointer text-[#19bfd3] " />
      </div>
    </div>
  );
}
/* 
bg-[#e0e0e2] */
