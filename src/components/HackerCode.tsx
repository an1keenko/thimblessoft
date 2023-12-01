"use client"

import {useEffect, useRef, useState} from "react";
import '../styles/HackerCode.css';

export const HackerCode = () => {
    const [text, setText] = useState('');
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const codeLines = [
        'function data(length) {',
        '  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";',
        '  let result = "";',
        '  for (let i = 0; i < length; i++) {',
        '    result += characters.charAt(Math.floor(Math.random() * characters.length));',
        '  }',
        '  return result;',
        '}',
        '',
        'console.log(generateRandomData(16));',
        '',
        'class DataProcessor {',
        '  constructor(data) {',
        '    this.data = data;',
        '  }',
        '',
        '  process() {',
        '    let result = "";',
        '    for (let i = 0; i < this.data.length; i++) {',
        '      result += String.fromCharCode(this.data.charCodeAt(i) ^ 0x73);',
        '    }',
        '    return result;',
        '  }',
        '}',
        '',
        'const processor = new DataProcessor(generateRandomData(16));',
        'console.log(processor.process());',
        '',
        'function fetchData(url) {',
        '  return new Promise((resolve, reject) => {',
        '    setTimeout(() => {',
        '      resolve(`Data from ${url}`);',
        '    }, 2000);',
        '  });',
        '}',
        '',
        'async function getData() {',
        '  try {',
        '    const data = await fetchData("https://api.example.com");',
        '    console.log(data);',
        '  } catch (error) {',
        '    console.error("An error occurred:", error);',
        '  }',
        '}',
        '',
        'getData();',
        '',
        'const person = {',
        '  firstName: "John",',
        '  lastName: "Doe",',
        '  get fullName() {',
        '    return `${this.firstName} ${this.lastName}`;',
        '  },',
        '  set fullName(name) {',
        '    const parts = name.split(" ");',
        '    this.firstName = parts[0];',
        '    this.lastName = parts[1];',
        '  }',
        '};',
        '',
        'console.log(person.fullName);',
        'person.fullName = "Jane Smith";',
        'console.log(person.fullName);',
    ];
    const code = codeLines.join('\n');

    useEffect(() => {
        let currentChar = 0;
        const typeChar = () => {
            setText((prevText) => prevText + code[currentChar]);
            currentChar++;
            if (currentChar < code.length) {
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                }
                timerRef.current = setTimeout(typeChar, 100);
            }
        };
        typeChar();
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return (
        <pre className="hacker-code">{text}</pre>
    );
};