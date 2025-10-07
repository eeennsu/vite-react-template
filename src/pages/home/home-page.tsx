import React from 'react';

// 단일 파일 React 컴포넌트 — Tailwind CSS 기준 스타일 클래스 사용
// 프로젝트에 바로 붙여넣어 사용하세요 (Next.js / Vite 모두 호환)
// 파일명 예시: LandingSeonwooAI.tsx

export default function HomePage() {
  return (
    <div className='text-4xl text-purple-600 italic'>Hello Home Page</div>
    // <div className='min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100'>
    //   {/* Nav */}
    //   <header className='sticky top-0 z-20 border-b border-zinc-800/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60'>
    //     <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
    //       <div className='flex items-center gap-2'>
    //         <Logo />
    //         <span className='text-sm tracking-wider text-zinc-300'>SUNWOO.AI</span>
    //       </div>
    //       <nav className='hidden items-center gap-6 text-sm text-zinc-300 md:flex'>
    //         <a href='#features' className='hover:text-white'>
    //           기능
    //         </a>
    //         <a href='#how' className='hover:text-white'>
    //           만드는 과정
    //         </a>
    //         <a href='#demo' className='hover:text-white'>
    //           데모
    //         </a>
    //         <a href='#faq' className='hover:text-white'>
    //           FAQ
    //         </a>
    //       </nav>
    //       <div className='flex items-center gap-2'>
    //         <a
    //           href='#cta'
    //           className='rounded-xl border border-zinc-700 px-3 py-2 text-sm hover:border-zinc-500 hover:bg-zinc-900'
    //         >
    //           문의하기
    //         </a>
    //         <a
    //           href='#cta'
    //           className='rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-zinc-200'
    //         >
    //           지금 만들기
    //         </a>
    //       </div>
    //     </div>
    //   </header>

    //   {/* Hero */}
    //   <section className='relative overflow-hidden'>
    //     <div className='pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]'>
    //       <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#22d3ee_0%,transparent_35%),radial-gradient(circle_at_80%_0%,#818cf8_0%,transparent_30%),radial-gradient(circle_at_50%_100%,#f472b6_0%,transparent_35%)] opacity-40' />
    //     </div>
    //     <div className='mx-auto max-w-6xl px-4 py-20 md:py-28'>
    //       <div className='inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300'>
    //         <span className='inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400' />
    //         선우서윤 전용 AI — 연출/콘서트/제품개발까지 한 번에
    //       </div>
    //       <h1 className='mt-6 text-4xl leading-tight font-extrabold tracking-tight md:text-6xl'>
    //         “선우서윤 전용 ai 만들어 줄 사이트”
    //         <span className='block bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-300 bg-clip-text text-transparent'>
    //           딱 필요한 방식으로 커스터마이즈
    //         </span>
    //       </h1>
    //       <p className='mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl'>
    //         무대 연출, 팬콘 기획, VCR 아이디어, 창의적인 아이디어. 선우서윤의 작업 흐름과 어휘, 자료
    //         구조를 학습한 전용 AI를 3단계로 빠르게 제작·배포합니다.
    //       </p>
    //       <div className='mt-7 flex flex-wrap items-center gap-3'>
    //         <a
    //           href='#cta'
    //           className='rounded-2xl bg-white px-5 py-3 font-semibold text-black hover:bg-zinc-200'
    //         >
    //           지금 만들기
    //         </a>
    //         <a
    //           href='#features'
    //           className='rounded-2xl border border-zinc-700 px-5 py-3 hover:border-zinc-500'
    //         >
    //           주요 기능 보기
    //         </a>
    //       </div>
    //       <ul className='mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-400'>
    //         <li>맞춤 프롬프트 템플릿</li>
    //         <li>개인화 메모리</li>
    //         <li>문서/이미지 참조</li>
    //         <li>자동화 리마인더</li>
    //         <li>보안 우선 설계</li>
    //       </ul>
    //     </div>
    //   </section>

    //   {/* Features */}
    //   <section id='features' className='mx-auto max-w-6xl px-4 py-16'>
    //     <h2 className='text-2xl font-bold md:text-3xl'>선우서윤 전용 AI, 이렇게 다릅니다</h2>
    //     <div className='mt-8 grid gap-4 md:grid-cols-3'>
    //       <FeatureCard
    //         title='연출 도메인 특화'
    //         desc='무대/조명/LED 업다운/브릿지 VCR 등 현장 언어에 최적화된 답변.'
    //       />
    //       <FeatureCard
    //         title='작업 스타일 학습'
    //         desc='톤·어휘·형식(대본/제안서/Tailwind/CI·CD YAML)을 메모리로 유지.'
    //       />
    //       <FeatureCard
    //         title='자료 참조'
    //         desc='업로드한 문서·요약·키워드를 인용해 근거 있는 제안.'
    //       />
    //       <FeatureCard title='자동화' desc='반복 요청(예: 셋리스트 변환, 체크리스트) 템플릿화.' />
    //       <FeatureCard title='빠른 배포' desc='개인용/팀공유용으로 웹 위젯 & 링크 배포.' />
    //       <FeatureCard
    //         title='보안/프라이버시'
    //         desc='프로젝트별 접근 제어와 비공개 저장을 기본값으로.'
    //       />
    //     </div>
    //   </section>

    //   {/* How it works */}
    //   <section id='how' className='mx-auto max-w-6xl border-t border-zinc-800/60 px-4 py-16'>
    //     <h2 className='text-2xl font-bold md:text-3xl'>만드는 과정 (3단계)</h2>
    //     <ol className='mt-8 grid gap-4 md:grid-cols-3'>
    //       <StepCard
    //         no={1}
    //         title='핵심 용례 수집'
    //         desc='최근 작업물/요청 패턴/금지어를 10~20개 샘플로 정리.'
    //       />
    //       <StepCard
    //         no={2}
    //         title='템플릿 & 메모리'
    //         desc='역할/톤/출력 포맷을 프롬프트 템플릿과 메모리로 학습.'
    //       />
    //       <StepCard
    //         no={3}
    //         title='테스트 & 배포'
    //         desc='실전 프롬프트로 검증 후 개인 위젯/링크로 배포.'
    //       />
    //     </ol>
    //   </section>

    //   {/* Demo */}
    //   <section id='demo' className='mx-auto max-w-6xl border-t border-zinc-800/60 px-4 py-16'>
    //     <h2 className='text-2xl font-bold md:text-3xl'>즉석 데모</h2>
    //     <p className='mt-3 text-zinc-300'>
    //       아래 예시 프롬프트로 어떤 결과가 나오는지 상상해보세요.
    //     </p>
    //     <div className='mt-6 grid gap-4 md:grid-cols-2'>
    //       <DemoCard title='무대 연출 요청'>
    //         허각 팬콘 오프닝 VCR 아이디어 3가지. LED 업다운 타이밍·조명 색·효과음까지 표로 정리.
    //       </DemoCard>
    //       <DemoCard title='개발/배포 지원'>
    //         Vite + GitHub Actions로 ECR 푸시 파이프라인 YAML. AWS 권한/비밀키 주석 포함.
    //       </DemoCard>
    //       <DemoCard title='문서화/제안서'>
    //         ‘Open Your Eye’ 팬콘 타이틀 소개문 3종(톤: 초대장/프레스/공식공지) A4 1p.
    //       </DemoCard>
    //       <DemoCard title='셋리스트·타이밍'>
    //         하이키 셋리스트(120분) BPM 흐름/브릿지VCR/앙코르 큐시트 표.
    //       </DemoCard>
    //     </div>
    //   </section>

    //   {/* CTA / Form */}
    //   <section id='cta' className='mx-auto max-w-6xl border-t border-zinc-800/60 px-4 py-16'>
    //     <div className='rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 md:p-10'>
    //       <h3 className='text-xl font-bold md:text-2xl'>지금 시작하기</h3>
    //       <p className='mt-2 text-zinc-300'>
    //         이메일을 남겨주시면 24시간 내 샘플 템플릿과 세팅 가이드를 보내드립니다.
    //       </p>
    //       <form
    //         className='mt-6 grid gap-3 md:grid-cols-[1fr_auto]'
    //         onSubmit={e => e.preventDefault()}
    //       >
    //         <input
    //           type='email'
    //           required
    //           placeholder='your@email.com'
    //           className='w-full rounded-2xl bg-zinc-900 px-4 py-3 ring-1 ring-zinc-700 outline-none ring-inset focus:ring-zinc-400'
    //         />
    //         <button className='rounded-2xl bg-white px-5 py-3 font-semibold text-black hover:bg-zinc-200'>
    //           샘플 받아보기
    //         </button>
    //       </form>
    //       <p className='mt-3 text-xs text-zinc-500'>
    //         개인정보는 견적·온보딩 목적 외에 사용하지 않습니다.
    //       </p>
    //     </div>
    //   </section>

    //   {/* FAQ */}
    //   <section id='faq' className='mx-auto max-w-6xl border-t border-zinc-800/60 px-4 py-16'>
    //     <h2 className='text-2xl font-bold md:text-3xl'>FAQ</h2>
    //     <div className='mt-6 space-y-4'>
    //       <Faq
    //         q='내 데이터(문서/이미지)를 학습에 쓰나요?'
    //         a='요청한 범위 내에서만 임시 참조하며, 비공개를 기본값으로 설정합니다. 프로젝트별 보안 스코프를 분리합니다.'
    //       />
    //       <Faq
    //         q='결과물 포맷을 지정할 수 있나요?'
    //         a='가능합니다. 대본/큐시트/표/코드 등 자주 쓰는 출력을 템플릿 버튼으로 제공합니다.'
    //       />
    //       <Faq
    //         q='팀과 같이 쓸 수 있나요?'
    //         a='네. 개인형과 팀 공유형(권한 관리) 두 가지로 배포할 수 있습니다.'
    //       />
    //       <Faq
    //         q='가격대는 어떻게 되나요?'
    //         a='요구 기능과 데이터 규모에 따라 달라집니다. 연락을 주시면 1분 견적 폼을 안내드립니다.'
    //       />
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <footer className='border-t border-zinc-800/60'>
    //     <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-zinc-400 md:flex-row'>
    //       <div className='flex items-center gap-2'>
    //         <Logo small />
    //         <span>© {new Date().getFullYear()} SUNWOO.AI</span>
    //       </div>
    //       <div className='flex items-center gap-4'>
    //         <a className='hover:text-zinc-200' href='#'>
    //           이용약관
    //         </a>
    //         <a className='hover:text-zinc-200' href='#'>
    //           개인정보처리방침
    //         </a>
    //         <a className='hover:text-zinc-200' href='#cta'>
    //           문의
    //         </a>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}

/* ==========================
 * Sub Components
 * ========================== */

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className='rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5'>
      <div className='flex items-start gap-3'>
        <div>
          <h3 className='font-semibold'>{title}</h3>
          <p className='mt-1 text-sm leading-relaxed text-zinc-400'>{desc}</p>
        </div>
      </div>
    </div>
  );
}

function StepCard({ no, title, desc }: { no: number; title: string; desc: string }) {
  return (
    <div className='relative rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5'>
      <div className='absolute -top-3 -left-3 grid h-8 w-8 place-items-center rounded-full bg-white font-bold text-black'>
        {no}
      </div>
      <h3 className='mt-2 font-semibold'>{title}</h3>
      <p className='mt-1 text-sm leading-relaxed text-zinc-400'>{desc}</p>
    </div>
  );
}

function DemoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className='rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5'>
      <h3 className='font-semibold'>{title}</h3>
      <pre className='mt-2 text-sm break-words whitespace-pre-wrap text-zinc-300/90'>
        {children}
      </pre>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className='rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5'>
      <summary className='cursor-pointer list-none font-medium text-zinc-200'>{q}</summary>
      <p className='mt-2 text-sm leading-relaxed text-zinc-400'>{a}</p>
    </details>
  );
}

function Logo({ small = false }: { small?: boolean }) {
  const size = small ? 18 : 22;
  return (
    <span className='inline-flex items-center gap-2'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect x='2' y='2' width='20' height='20' rx='5' className='fill-white' />
        <path
          d='M7 16.5V7.5H9.4L12.2 13.1L15 7.5H17.4V16.5H15.6V10.5L12.9 15.6H11.5L8.8 10.5V16.5H7Z'
          className='fill-black'
        />
      </svg>
      <strong className='tracking-tight'>선우 전용 AI</strong>
    </span>
  );
}
