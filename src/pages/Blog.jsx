import React, { useEffect, useState } from 'react'
import { Nav, Footer } from "../components";
import { homelab } from '../assets/images';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';

const Blog = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  useEffect(() => {
    const articlePath = '/articles/terraform-homelab.md'; 

    const fetchMarkdown = async () => {
    const response = await fetch(articlePath);
        if (!response.ok) {
          throw new Error(`Failed to load article: ${response.statusText}`);
        }
        const text = await response.text();
        setMarkdownContent(text);
    };
    fetchMarkdown();
  }, []);
  return (
    <main className='sm:relative flex flex-col w-full h-screen justify-between bg-cover.bg-clip-custom-2 bg-wavebg'>
      <Nav />
      <div className="flex-grow container mx-auto p-8">
          <div className="prose lg:prose-xl mx-auto">
            <div class="mb-8 pb-6 border-b border-gray-200">
            <h1 class="text-4xl font-extrabold leading-tight mb-3 text-gray-900">An introductory guide to creating your first Homelab!</h1>
            <img
                src={ homelab }
                alt='picture'
                width={ 400 }
                height={ 250 }
                className='mx-auto'
            />
            <div class='text-center text-sm text-gray-500'>
                Image created by Gemini
            </div>
            <div class="flex flex-wrap items-center text-gray-600 text-sm mb-4">
                <span class="mr-4 flex items-center">
                <svg class="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <time datetime="2025-07-23">July 23, 2025</time>
                </span>
                <span class="mr-4">|</span>
                <span class="flex items-center">
                <svg class="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v4m-6 4v4m0 0h.01"></path></svg>
                Category: <a href="/categories/devops" class="text-blue-600 hover:underline">Homelab</a>
                </span>
            </div>

            <div class="flex flex-wrap gap-2">
                <a href="/tags/kubernetes" class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full hover:bg-blue-200">#terraform</a>
                <a href="/tags/homelab" class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full hover:bg-blue-200">#homelab</a>
                <a href="/tags/devops" class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full hover:bg-blue-200">#devops</a>
            </div>
            </div>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[
                  [rehypePrismPlus, { defaultLanguage: 'markup', ignoreMissing: true }]
                ]}
              >
                {markdownContent}
              </ReactMarkdown>
          </div>
      </div>

      <footer id='footer'>
        <Footer />
      </footer>
    </main>
  );
}

export default Blog