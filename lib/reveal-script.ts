/**
 * Inline, framework-independent scroll reveal (≈400 bytes).
 * Injected at the end of <body> so sections animate in as soon as the HTML
 * arrives, without waiting for React to hydrate. <Reveal/> mirrors the same
 * logic for elements rendered later (client-side navigation).
 */
export const revealScript = `(function(){var d=document,q=d.querySelectorAll(".reveal:not(.is-visible)");if(!("IntersectionObserver" in window)){for(var i=0;i<q.length;i++)q[i].classList.add("is-visible");return}var o=new IntersectionObserver(function(es){for(var i=0;i<es.length;i++){var e=es[i];if(e.isIntersecting){e.target.classList.add("is-visible");o.unobserve(e.target)}}},{threshold:0.15,rootMargin:"0px 0px -8% 0px"});for(var j=0;j<q.length;j++)o.observe(q[j])})();`;
