import React from 'react';
import { get, flattenDeep } from 'lodash';

export const strings = {
  homepage: {
    title: 'Daniel Burer',
    line1: 'software engineer',
    line2: 'digital creative',
    line3: 'designer',
  },
  about: {
    headline:
      "Hey, I’m Daniel (or you might know me as Danny!). Right now I'm working as a software engineer @Microsoft.",
    headline_linkMeta: {
      '@Microsoft': 'https://www.microsoft.com/',
    },
    line1:
      'I recently finished my Master of Science degree in CS @Georgia Tech, specializing in Machine Learning. Outside of work or school, I love working on side projects, producing music, and video games!',
    line1_linkMeta: {
      '@Georgia Tech': 'https://www.gatech.edu/',
    },
    line2:
      'Wanna talk? Feel free to drop me an email or connect with me on LinkedIn.',
    line2_linkMeta: {
      email: 'https://www.gatech.edu/',
      LinkedIn: 'https://www.linkedin.com/in/daniel-burer-452963118/',
    },
  },
  getString(path) {
    return get(this, path);
  },
  render(path) {
    const string = get(this, path);
    const stringLinkMeta = get(this, `${path}_linkMeta`);

    const linkify = (inputString) => {
      for (const [text, href] of Object.entries(stringLinkMeta || {})) {
        if (inputString.includes(text)) {
          const [pre, post] = inputString.split(text);
          const wrapped = (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {text}
            </a>
          );
          return [linkify(pre), wrapped, linkify(post)];
        }
      }
      return [inputString];
    };

    return <>{flattenDeep(linkify(string || ''))}</>;
  },
};

export const getString = strings.getString.bind(strings);
export const render = strings.render.bind(strings);
