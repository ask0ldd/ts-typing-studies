import './style.css'
import { setupCounter } from './counter.ts'

// https://github.com/type-challenges/type-challenges/?tab=readme-ov-file

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
