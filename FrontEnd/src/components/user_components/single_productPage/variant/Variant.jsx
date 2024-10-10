import React from 'react';

function Variant() {
  const colors = [
    { name: 'Gray', class: 'bg-neutral-700' },
    { name: 'Brown', class: 'bg-orange-900' },
    { name: 'Black', class: 'bg-neutral-900' },
  ];

  return (
    <div className="flex gap-6 self-start mt-6">
      {colors.map((color, index) => (
        <button
          key={index}
          className={`flex shrink-0 rounded-full ${color.class} h-[31px] w-[33px]`}
          aria-label={`Select ${color.name} color`}
        />
      ))}
    </div>
  );
}

export default Variant;