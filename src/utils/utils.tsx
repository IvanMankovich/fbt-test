import { Fragment, ReactNode } from 'react';
import { User, UserAddress } from '../types/types';

export function getMarkedString(
  currStr: string,
  loweredStr: string,
  searchStr: string,
): ReactNode[] {
  const res = [];
  if (searchStr.trim()) {
    const matchLen = searchStr.length;
    let prevAppearance = 0;
    let firstAppearanceInd = loweredStr.indexOf(searchStr, prevAppearance);

    if (firstAppearanceInd > -1) {
      while (firstAppearanceInd !== -1) {
        res.push(currStr.slice(prevAppearance, firstAppearanceInd));
        prevAppearance = firstAppearanceInd + matchLen;
        const marked = <mark>{currStr.slice(firstAppearanceInd, prevAppearance)}</mark>;
        res.push(marked);

        firstAppearanceInd = loweredStr.indexOf(searchStr, prevAppearance);
      }

      res.push(currStr.slice(prevAppearance));
    } else {
      res.push(currStr);
    }
  } else {
    res.push(currStr);
  }

  return res.map((v, i) => <Fragment key={i}>{v}</Fragment>);
}

export interface UserHighlighted extends Omit<User, 'name' | 'username' | 'email'> {
  name: ReactNode[];
  username: ReactNode[];
  email: ReactNode[];
}

export function filterUsers(str: string, items: User[]) {
  const result: UserHighlighted[] = [];
  const loweredStr = str.trim().toLowerCase();
  const ITEMS_LENGTH = items.length;

  for (let i = 0; i < ITEMS_LENGTH; i++) {
    let userData: UserHighlighted | null = null;
    const { name, username, email } = items[i];
    const loweredName = name.toLowerCase(),
      loweredUsername = username.toLowerCase(),
      loweredEmail = email.toLowerCase();

    if (
      loweredName.includes(loweredStr) ||
      loweredUsername.includes(loweredStr) ||
      loweredEmail.includes(loweredStr)
    ) {
      userData = {
        ...items[i],
        name: getMarkedString(name, loweredName, loweredStr),
        username: getMarkedString(username, loweredUsername, loweredStr),
        email: getMarkedString(email, loweredEmail, loweredStr),
      } as UserHighlighted;
    }

    if (userData) {
      result.push(userData);
    }
  }

  return result;
}

function firstLetterToUpperCase(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function parseAddress(address?: UserAddress) {
  const res = [];
  if (address) {
    for (let prop in address) {
      if (typeof address[prop as keyof UserAddress] === 'string') {
        res.push(`${firstLetterToUpperCase(prop)}: ${address[prop as keyof UserAddress]}`);
      }
    }
  }

  return res.join('; ');
}
