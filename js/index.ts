import {gen_pow} from '../pkg/index.js';

import genJsonPayload from './utils/genJsonPayload';

type PoWConfig = {
  string: string;
  difficulty_factor: number;
  salt: string;
};

type GetConfigPayload = {
  key: string;
};

type Work = {
  result: string;
  nonce: number;
}

const mcaptchaContainer = document.getElementById('mcaptcha');
const sitekey = mcaptchaContainer.dataset.sitekey;
const provider = new URL(mcaptchaContainer.dataset.provider);

const btnId = 'mcaptcha-pow-btn';

/** add  mcaptcha widget element to DOM */
const createWidget = () => {
  const btn = document.createElement('input');
  btn.type = 'button';
  btn.id = btnId;

  const btnText = document.createTextNode(`I'm Human`);
  btn.appendChild(btnText);

  mcaptchaContainer.appendChild(btn);

  btn.addEventListener('clicl', () => console.log(''));
};

/** fetch proof-of-work configuration */
const fetchPoW = async () => {
  const payload: GetConfigPayload = {
    key: sitekey,
  };

  const res = await fetch(provider.toString(), genJsonPayload(payload));
  if (res.ok) {
    alert('success');
    const config: PoWConfig = await res.json();
    return config;
  } else {
    const err = await res.json();
    alert(`error: ${err.error}`);
  }
};

const prove = async (config: PoWConfig) => {
  const proofString = gen_pow(
    config.salt,
    config.string,
    config.difficulty_factor,
  );
  const proof: Work = JSON.parse(proofString);

  return proof;
};
