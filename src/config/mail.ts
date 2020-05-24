interface IMailConfig {
  driver: 'ethereal' | 'ses';
  dafaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  dafaults: {
    from: {
      email: 'davij_almeida@hotmail.com',
      name: 'Davi Almeida',
    },
  },
} as IMailConfig;
