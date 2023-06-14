import { useState } from "react";

interface Prop {
  enabled: boolean;
  selectType: Function;
}

export default function Toggle({ enabled, selectType }: Prop) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex border-gray-300 border-2 rounded-full">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              selectType();
            }}
            className="w-11 h-6  rounded-full peer  peer-focus:ring-gray-700  peer-checked:after:translate-x-full peer-checked:after:border-gray-700 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-primary-default after:border-gray-700 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "
          ></div>
        </label>
      </div>
    </div>
  );
}
