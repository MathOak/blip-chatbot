// Função para pegar um cookie
function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([.$?*|{}()[]\/+^])/g, '\\$1')}=([^;]*)`
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: Date | string;
  'max-age'?: number;
  secure?: boolean;
  'samesite'?: 'strict' | 'lax' | 'none';
}
// Função para definir um cookie
function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  options = {
    path: '/',
    // O valor padrão de options é "/" para tornar o cookie acessível em todas as páginas
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionKey in options) {
    updatedCookie += `; ${optionKey}`;
    const optionValue = options[optionKey as keyof CookieOptions];
    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
  }

  document.cookie = updatedCookie;
}

// Função para deletar um cookie
function deleteCookie(name: string): void {
  setCookie(name, "", {
    'max-age': -1
  });
}

export const cookieUtils = {
  getCookie,
  setCookie,
  deleteCookie,
}
