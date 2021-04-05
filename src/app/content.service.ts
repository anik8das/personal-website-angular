import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  aboutContent = `I'm a sophomore and CS major at <a href = "https://www.minerva.kgi.edu/" target="_blank">Minerva 
  Schools</a>, a highly selective undergraduate program in the United States with a diverse student body. 
  Apart from being a student and coder, I'm also a professional <a href = "https://www.worldcubeassociation.org/persons/2015DASA02" target="_blank">
  Rubik's Cube solver</a> and retail investor. I was
  born in Mumbai, India, and lived there for 18 years, after which I've been travelling the world through 
  International speedcubing competitions and as a part of Minerva’s <a href = "https://www.minerva.kgi.edu/undergraduate-program/global-experience/" target="_blank">
  Global Rotation</a>. 
  I’m interested in technology, finance, entrepreneurship, environmental sustainability, East Asian politics, travelling, and gaming. 
  I aspire to leverage technology for sustainability. Welcome to my page!`;
  
    constructor() { }
  }

