const paths = {
  shield: <><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" /><path d="m8.8 12.2 2.2 2.2 4.3-4.6" /></>,
  server: <><rect x="4" y="4" width="16" height="6.5" rx="2" /><rect x="4" y="13.5" width="16" height="6.5" rx="2" /><path d="M8 7.25h.01M8 16.75h.01M12 7.25h4M12 16.75h4" /></>,
  cloud: <><path d="M7 18.5h10.2a4.3 4.3 0 0 0 .6-8.56A6 6 0 0 0 6.3 11.2 3.7 3.7 0 0 0 7 18.5Z" /></>,
  infinity: <><path d="M12 12c-1.8-2.4-3.3-3.6-5-3.6a3.6 3.6 0 0 0 0 7.2c1.7 0 3.2-1.2 5-3.6Zm0 0c1.8 2.4 3.3 3.6 5 3.6a3.6 3.6 0 0 0 0-7.2c-1.7 0-3.2 1.2-5 3.6Z" /></>,
  check: <path d="m5 12.5 4.2 4.2L19 7" />,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  bolt: <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  lock: <><rect x="5" y="10.5" width="14" height="10" rx="2.2" /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" /></>,
  chart: <><path d="M4 20h16" /><path d="M7 16v-4M12 16V8M17 16v-7" /></>,
  users: <><circle cx="9" cy="8.5" r="3.2" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M15.5 5.6a3.2 3.2 0 0 1 0 5.8M17.5 14.3A5.5 5.5 0 0 1 20.5 19" /></>,
  mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="2.2" /><path d="m4.5 7 7.5 6 7.5-6" /></>,
  phone: <path d="M6.6 3.8 9 4.3l1.2 3.6-1.8 1.4a12 12 0 0 0 6.3 6.3l1.4-1.8 3.6 1.2.5 2.4a2 2 0 0 1-2 2.3A16.2 16.2 0 0 1 4.3 5.8a2 2 0 0 1 2.3-2Z" />,
  pin: <><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" /><circle cx="12" cy="10" r="2.4" /></>,
};

export default function Icon({ name, size = 24, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
