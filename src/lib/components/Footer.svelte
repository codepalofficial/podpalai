<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte'
  </script>
  
  <Footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <FooterCopyright href="/" by="PodPal.AI™" year={2023} />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <FooterLink href="/about">About</FooterLink>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/licensing">Licensing</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
      <FooterLink href="/">Follow Podpal.AI on Social Media</FooterLink>

    </FooterLinkGroup>
  </Footer>