import { config } from '../config/config';
import { emailTemplates } from '../utils/helper';
import { IEmailLocals, winstonLogger } from '@raman7073/helper-library';
import { Logger } from 'winston';

const log: Logger = winstonLogger(
  `${config.ELASTIC_SEARCH_URL}`,
  'mailTransport',
  'debug'
);

async function sendEmail(
  template: string,
  receiverEmail: string,
  locals: IEmailLocals
): Promise<void> {
  try {
    emailTemplates(template, receiverEmail, locals);
    log.info('Email sent successfully.');
  } catch (error) {
    log.log('error', 'NotificationService MailTransport sendEmail() method error:', error);
  }
}

export { sendEmail };
