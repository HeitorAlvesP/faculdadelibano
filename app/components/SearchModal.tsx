"use client";

const courseAreas = [
  { name: 'Educação', count: 280, img: 'educacao.webp' },
  { name: 'Saúde', count: 229, img: 'saude.webp' },
  { name: 'Engenharia', count: 42, img: 'engenharia.webp' },
  { name: 'Direito', count: 85, img: 'direito.webp' },
  { name: 'Psicologia', count: 39, img: 'psicologia.webp' },
  { name: 'Empresarial', count: 341, img: 'empresarial.webp' },
  { name: 'MBA Executivo', count: 187, img: 'mba-executivo.webp' },
  { name: 'Meio Ambiente', count: 47, img: 'meio-ambiente.webp' },
  { name: 'Serviço Social', count: 21, img: 'servico-social.webp' },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100000] flex items-start justify-center pt-[5vh] bg-[#0B182F]/50 backdrop-blur-md px-4 pb-4 animate-in fade-in duration-300">
      
      <div className="bg-white w-[95%] max-w-[1300px] min-h-[60vh] max-h-[90vh] rounded-[24px] shadow-2xl flex flex-col overflow-hidden transform transition-all">

        <div className="relative px-6 py-8 md:px-10 md:py-10 border-b border-gray-100 bg-white shrink-0 flex flex-col items-center">
          
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 md:top-6 md:right-6 bg-gray-100 hover:bg-gray-200 hover:text-[#ea005f] text-gray-500 rounded-full p-2 transition-colors"
            aria-label="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="relative w-full max-w-3xl mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#ea005f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 21l-4.35-4.35"></path><circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input 
              autoComplete="off" 
              spellCheck={false} 
              type="text" 
              placeholder="Qual pós-graduação você busca?" 
              className="w-full bg-white border-2 border-gray-200 focus:border-[#ea005f] hover:border-gray-300 shadow-sm rounded-full text-gray-800 outline-none text-lg md:text-xl font-medium h-[64px] pl-[56px] pr-[24px] placeholder:text-gray-400 placeholder:font-normal transition-all" 
              autoFocus
            />
          </div>
        </div>

        <div className="p-6 md:p-10 bg-gray-50/50 overflow-y-auto md:overflow-hidden flex-1 flex flex-col justify-between">
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-gray-500 text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                Explore Nossas Áreas
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {courseAreas.map((cat, index) => (
                <button 
                  key={index} 
                  className="group relative flex items-center p-4 md:p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#ea005f]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ea005f] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="w-[64px] h-[64px] rounded-xl overflow-hidden shrink-0 shadow-sm ml-1 relative z-10 bg-gray-50">
                    <img 
                      alt={`Área: ${cat.name}`} 
                      loading="lazy" 
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500" 
                      src={`https://faculdadelibano.com.br/images/ChooseSection/${cat.img}`} 
                    />
                  </div>
                  
                  <div className="ml-5 flex-1 relative z-10">
                    <div className="font-bold text-gray-800 text-[1.05rem] group-hover:text-[#ea005f] transition-colors leading-tight">
                      {cat.name}
                    </div>
                    <div className="text-[0.8rem] font-medium text-gray-500 mt-1 flex items-center gap-1">
                      <span>{cat.count} cursos</span>
                      <svg className="w-4 h-4 text-[#ea005f] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center gap-3 mt-6 pt-6 border-t border-gray-200/60">
            <button 
              className="w-2.5 h-2.5 rounded-full bg-[#ea005f] transition-all duration-300"
              aria-label="Página 1"
            ></button>
            <button 
              className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 cursor-not-allowed opacity-50"
              aria-label="Página 2 (Em breve)"
              title="Em breve"
            ></button>
          </div>

        </div>
      </div>
    </div>
  );
}