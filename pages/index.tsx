import React from 'react'
import { Page } from '../components/Page'
import { Project } from '../components/Project'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>AmazonTeam</title>
      </Head>
      <div className='flex justify-center pt-8'>
        <Image width={200} height={113} src='/logoAmazonteam.png' />
      </div>
      <div className='pt-12 pb-16 lg:pb-24'>
        <h1 className='text-5xl font-bold'>Olá, nós somos o AmazonTeam</h1>
        <p className='text-base'>Nós somos o AmazonTeam, um time apaixonado por desenvolvimento e música.</p>
        <p>
          Gostamos bastante do feeling de resolver problemas da vida real com tecnologia e temos desenvoltura pra buscar soluções pra
          qualquer problema. Desenvolvemos sites que atenderam dezenas de milhares de usuários por dia, gerenciando por conta própria toda a
          estrutura.
        </p>
      </div>

      <p className='text-4xl font-bold pb-8'>Projetos</p>

      <div className='md:grid md:gap-10 md:grid-cols-2'>
        <Project
          href='/projetos/minhacarteirinha'
          name='MinhaCarteirinha'
          img='/mcHome.png'
          description={
            <>
              <div className='text-base'>
                <p>
                  Em produção desde 2017, arquitetei e desenvolvi o App e API para cadastro, validação e entrega de carteirinhas para
                  impressão em gráficas de dezenas de milhares de estudantes por ano em Pernambuco.
                </p>
                <p>
                  Meu objetivo principal foi prover uma aplicação flexível para que novas entidades estudantis, com outros formatos e
                  requisitos pudessem ser adicionadas posteriormente, sem comprometer a segurança e performance.
                </p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>React</span>
                <span className='px-3 py-1'>CRA</span>
                <span className='px-3 py-1'>Typescript</span>
                <span className='px-3 py-1 pr-0'>Spring Boot</span>
              </div>
            </>
          }
          link='https://minhacarteirinha.com'
        />
        <Project
          href='#'
          name='Estúdio de Dublagem e Legendagem'
          img='/subtitleEditor.png'
          description={
            <>
              <div className='text-base'>
                <p>
                  Desemvolvemos vários componentes complexos, que sincronizam seus estados com o tempo do vídeo para fornecer uma ferramente
                  online de edição de arquivos de legenda, sincronização de falas e cálculo de caracteres por segundo.
                </p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>NextJS</span>
                <span className='px-3 py-1'>GraphQL</span>
                <span className='px-3 py-1'>Media API</span>
                <span className='px-3 py-1 pr-0'></span>
              </div>
            </>
          }
        />
        <Project
          href='#'
          name='IstoÉ'
          img='/istoe.png'
          description={
            <>
              <div className='text-base'>
                <p>
                  Participamos da construção do Frontend do novo portal da IstoÉ, um desafio enorme ainda em andamento na Taller, sendo a
                  IstoÉ um dos maiores portais de notícias do Brasil.
                </p>
                <p>Estamos em contato constante com o time de Design para criar telas de altissima fidelidade, responsivas e mordenas.</p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>Next</span>
                <span className='px-3 py-1'>GraphQL</span>
                <span className='px-3 py-1'></span>
                <span className='px-3 py-1 pr-0'></span>
              </div>
            </>
          }
          link=''
        />
        <Project
          href='#'
          name='Covid Cases'
          img='/covid19.png'
          description={
            <>
              <div className='text-base'>
                <p>Sistema criado durante a pandemia em 2020.</p>
                <p>O objetivo principal foi informar as pessoas sobre a situação do corona vírus em todos os paises.</p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>Component</span>
                <span className='px-3 py-1'>React</span>
                <span className='px-3 py-1'>Node</span>
                <span className='px-3 py-1 pr-0'>PostgreSQL</span>
              </div>
            </>
          }
          link='https://covid-api-i8tnoa1xc.vercel.app/'
        />

        <Project
          name='MLB Admin'
          href='/projetos/mlb'
          link='https://mlbadmin.web.app'
          githubLink='https://github.com/hexetia/mlbadmin'
          img='/mlb.png'
          description={
            <>
              <div className='text-base'>
                <p>WebApp nascido para digitalizar e acelerar o acesso a dados de membros do movimento.</p>
                <p>
                  Várias atividades, como, reuniões dos membros, checagem da lista de ocupantes e planejamento eram ativides custosas, pois
                  eram feitas buscas em fichas de registro de papel.
                </p>
                <p>Foi o meu primeiro projeto a usar Continuous Devlivery & Continuous Deployment usando Github Actions.</p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>CI</span>
                <span className='px-3 py-1'>CD</span>
                <span className='px-3 py-1'>Firebase</span>
                <span className='px-3 py-1'>Next.js</span>
                <span className='px-3 py-1 pr-0'>React-Query</span>
              </div>
            </>
          }
        />

        <Project
          name='Telzir'
          img='/telzirWeb.png'
          href='https://telzirx.netlify.app'
          link='https://telzirx.netlify.app'
          githubLink='https://github.com/hexetia/telzir'
          externalHref
          description={
            <>
              <div className='text-base'>
                <p>Design e implementação de uma landing page responsiva, mobile-first de uma operadora de telefonia fictícia.</p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>React</span>
                <span className='px-3 py-1'>Typescript</span>
              </div>
            </>
          }
        />

        <Project
          name='React-Fitty'
          img='/react-fitty.png'
          href='https://github.com/hexetia/react-fitty'
          link='https://github.com/hexetia/react-fitty'
          externalHref
          description={
            <>
              <div className='text-base'>
                <p>Componente em react que escala textos ou frases para ocupar toda a largura do componente pai.</p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>Component</span>
                <span className='px-3 py-1'>React</span>
              </div>
            </>
          }
        />

        <Project
          name='useClientRouter para Next.js'
          img='/use-client-router.png'
          externalHref
          href='https://github.com/hexetia/use-client-router'
          link='https://github.com/hexetia/use-client-router'
          description={
            <>
              <div className='text-base'>
                <p>
                  React hook que melhora o router do next.js no frontend, basta subistituir no seu componente o router padrão do next.js e
                  voilà, você ganhou um router melhorado.
                </p>
              </div>
              <div className='flex py-4'>
                <span className='px-3 py-1 pl-0'>Component</span>
                <span className='px-3 py-1'>React</span>
                <span className='px-3 py-1'>Next.js</span>
              </div>
            </>
          }
        />
      </div>
    </Page>
  )
}
