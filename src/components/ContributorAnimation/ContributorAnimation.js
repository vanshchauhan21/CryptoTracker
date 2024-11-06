
export const setupContributorCardAnimations = () => {
    console.log("Setting up Intersection Observer...");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("Card intersecting:", entry.target);
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });
  
    const animateCards = () => {
      console.log("Setting up card animations...");
      document.querySelectorAll('.contributor-card').forEach((card, index) => {
        console.log("Setting up card:", card, "index:", index);
        card.style.setProperty('--order', index);
        observer.observe(card);
      });
    };
  
    
    setTimeout(animateCards, 100);
  
    return () => {
      console.log("Cleaning up observer...");
      observer.disconnect();
    };
  };