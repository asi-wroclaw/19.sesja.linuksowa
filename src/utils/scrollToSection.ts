import { HEADER_HEIGHT } from '@/components/NavBar';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(`${sectionId}`);
  if (window && element) {
    window.scrollTo({
      behavior: 'smooth',
      top: element.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT,
    });
  }
};

export default scrollToSection;
