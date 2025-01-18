



export const Button: React.FC<ButtonProps> = ({ children, icon, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex gap-3 px-6 py-3.5 text-base leading-none text-center text-white bg-blue-700 rounded-xl border border-blue-700 border-solid max-md:px-5"
    >
      <div className="grow my-auto">{children}</div>
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 aspect-square w-[18px]"
        />
      )}
    </button>
  );
}