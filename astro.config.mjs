import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: 'https://rotaractgalgotias.org',
  integrations: [tailwind(), react(), mdx(), sitemap()],
  redirects: {
    '/team/aakanshi-garg': '/our-team/divyanshu-katiyar',
    '/team/abhishek-singh': '/our-team/areeb-ur-rub',
    '/team/aditya-garg': '/our-team/anurag-kaushik',
    '/team/akansha-choudhary': '/our-team/ritik-varshney',
    '/team/ananya-gupta': '/our-team/yash-gupta',
    '/team/anirudh-singh': '/our-team/bhavya-sinha',
    '/team/anurag-kaushik': '/our-team/sanket-gupta',
    '/team/areeb-ur-rub': '/our-team/ananya-gupta',
    '/team/bhavya-sinha': '/our-team/prachi-chaudhary',
    '/team/devansh-shrivasava': '/our-team/shubham-pandey',
    '/team/dhruv-jha': '/our-team/dhruv-jha',
    '/team/divyanshu-katiyar': '/our-team/priyesh-singh',
    '/team/krishna-samrat-bajpai': '/our-team/shivansh-nigam',
    '/team/kritika-singh': '/our-team/srishti-srivastava',
    '/team/nandani-mittal': '/our-team/akansha-choudhary',
    '/team/prachi-singh': '/our-team/pranav-raj',
    '/team/pranav-raj': '/our-team/anirudh-singh',
    '/team/prashant-joshi': '/our-team/shubham-singh',
    '/team/priyesh-singh': '/our-team/prashant-joshi',
    '/team/rachit-katiyar': '/our-team/rashi-gupta',
    '/team/rashi-gupta': '/our-team/devansh-shrivasava',
    '/team/ritik-varshney': '/our-team/sanskar-jaiswal',
    '/team/samridh-srivastava': '/our-team/vikas-singh',
    '/team/sanket-gupta': '/our-team/kritika-singh',
    '/team/sanskar-jaiswal': '/our-team/aditya-garg',
    '/team/shivansh-nigam': '/our-team/shreyash-srivastava',
    '/team/shreyash-srivastava': '/our-team/rachit-katiyar',
    '/team/shubham-pandey': '/our-team/aakanshi-garg',
    '/team/shubham-singh': '/our-team/urvashi-bajpai',
    '/team/shrishti-shrivastava': '/our-team/nandani-mittal',
    '/team/urvashi-bajpai': '/our-team/samridh-srivastava',
    '/team/utkarsh-khare': '/our-team/abhishek-singh',
    '/team/vikas-singh': '/our-team/krishna-samrat-bajpai',
    '/team/yash-gupta': '/our-team/utkarsh-khare',
  }
});