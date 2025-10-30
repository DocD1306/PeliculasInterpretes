function Interprete(props) {
  const {nombre, foto, children} = props;
  return (
    <>
      <div class="background_color_white p-4 rounded-lg shadow-md flex flex-col items-center max-w-[320px]">
        <div class="h-[350px] w-full overflow-hidden">
          <img src={foto} alt={nombre} class="w-full rounded-md mb-3 object-cover"/>
        </div>
        <div class="pt-5">
          <h2 class="pb-3 text_medium_bold">{nombre}</h2>
          <p>{children}</p>
        </div>
      </div>
    </>
  )
}

export default Interprete
