import DateFormat from '../Utils/DateFormat';
import packageJson from '../../../package.json';

export class ManifestService {
  public async invoke(): Promise<any> {
    return {
      timestamp: DateFormat.timestamp(new Date()),
      version: packageJson.version,
    };
  }
}
