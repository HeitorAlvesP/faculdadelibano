"use client";

const categories = [
  { id: 'educacao', title: 'Educação', count: 280, desc: 'Comece a enxergar a educação de um jeito inovador!', img: 'https://faculdadelibano.com.br/images/ChooseSection/educacao.webp' },
  { id: 'saude', title: 'Saúde', count: 229, desc: 'Especializações para atuar em clínicas e hospitais.', img: 'https://faculdadelibano.com.br/images/ChooseSection/saude.webp' },
  { id: 'engenharia', title: 'Engenharia', count: 42, desc: 'Destaque o seu currículo, gerencie produções e assine laudos em construções.', img: 'https://faculdadelibano.com.br/images/ChooseSection/engenharia.webp' },
  { id: 'direito', title: 'Direito', count: 85, desc: 'Chegue preparado em tribunais e conquiste pontos extras em concursos.', img: 'https://faculdadelibano.com.br/images/ChooseSection/direito.webp' },
  { id: 'psicologia', title: 'Psicologia', count: 39, desc: 'Esteja pronto para consultórios, instituições e clínicas. Amplie o mundo da Psicologia.', img: 'https://faculdadelibano.com.br/images/ChooseSection/psicologia.webp' },
  { id: 'empresarial', title: 'Empresarial', count: 341, desc: 'O próximo gestor da sua empresa, tem que ser você!', img: 'https://faculdadelibano.com.br/images/ChooseSection/empresarial.webp' },
  { id: 'mba-executivo', title: 'MBA Executivo', count: 187, desc: 'Masterize as habilidades de um executivo.', img: 'https://faculdadelibano.com.br/images/ChooseSection/mba-executivo.webp' },
  { id: 'meio-ambiente', title: 'Meio Ambiente', count: 47, desc: 'Vá além de plantar uma árvore. Seja responsável pelo meio ambiente.', img: 'https://faculdadelibano.com.br/images/ChooseSection/meio-ambiente.webp' },
  { id: 'servico-social', title: 'Serviço Social', count: 21, desc: 'Assegure que as experiências nos serviços sociais sejam satisfatórias.', img: 'https://faculdadelibano.com.br/images/ChooseSection/servico-social.webp' }
];

export default function CourseCategories() {
  return (
    <>
      <section id="courses" className="flex flex-col items-center px-[30px] max-md:px-[20px] -mt-12">
        
        <h2 
          className="text-[#0B182F] text-center mb-[30px] pb-[30px] text-[2.75rem] font-bold leading-[57.2px] max-md:text-[35px] max-md:leading-[42px]" 
          aria-label="Escolha sua área de interesse"
        >
          Escolha sua área de interesse
        </h2>
        
        <div className="w-full max-w-[1170px] grid grid-cols-3 justify-center items-center max-md:grid-cols-1">
          
          {categories.map((cat) => (
            <div key={cat.id} className="w-[95%] max-md:w-full max-md:ml-0 ml-[2.5%] pb-[30px] flex max-[1199px]:flex-col justify-center select-none">
              
              <div className="w-full">
                <div className="group cursor-pointer w-full min-[1200px]:h-[515px] bg-white drop-shadow transition-all duration-300 max-md:w-full max-md:h-auto hover:drop-shadow-lg hover:-translate-y-1 will-change-transform rounded-t-[25px] overflow-hidden">
                  
                  <div className="overflow-hidden w-full bg-cover aspect-[4/3] relative rounded-t-[25px]">
                    <img 
                      alt={cat.title} 
                      loading="lazy" 
                      decoding="async" 
                      className="pointer-events-none object-cover transition-transform duration-500 ease-out group-hover:ease-linear group-hover:duration-[5000ms] group-hover:scale-125 absolute h-full w-full inset-0" 
                      src={cat.img} 
                    />
                  </div>

                  <div className="max-[1199px]:min-h-[183px] min-[1200px]:h-[183px] p-8 max-md:h-auto pb-3 bg-white">
                    <h3 className="text-[#0B182F] font-bold text-2xl leading-tight">{cat.title}</h3>
                    <h4 className="text-[#00A859] font-bold text-base pt-5">{cat.count} cursos disponíveis</h4>
                    <p className="tracking-[0.15px] text-[#3C4043] font-normal text-[0.9375rem] pt-1 min-[1200px]:mr-7 max-md:mr-0">
                      {cat.desc}
                    </p>
                  </div>
                  
                  <hr aria-hidden="true" className="border-gray-100" />
                  
                  <span className="text-[#ea005f] font-bold flex justify-center text-[0.875rem] tracking-wider items-center py-4 bg-white">
                    CONFIRA OS CURSOS
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="ml-2 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                    </svg>
                  </span>

                </div>
              </div>
              
              <div className="min-[1200px]:hidden h-full w-full"></div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}