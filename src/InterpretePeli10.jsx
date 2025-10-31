function Interprete(props) {
  const {nombre, foto, children, esNota10} = props;
  return (
    <>
      <div className="background_color_white p-4 rounded-lg shadow-md flex flex-col items-center max-w-[320px]">
        <div className="w-full h-[350px] overflow-hidden">
          <img src={foto} alt={nombre} className="w-full h-full object-cover object-top rounded-md mb-3"/>
        </div>
        <div className="w-full pt-5">
          <h2 className={`pb-3 ${esNota10 ? 'text-red-600' : 'text_normal_bold'}`}>{nombre}</h2>
          <p>{children}</p>
        </div>
      </div>
    </>
  )
}

export default Interprete
