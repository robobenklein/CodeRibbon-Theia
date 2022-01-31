import { injectable } from '@theia/core/shared/inversify';

@injectable()
// Add contribution interface to be implemented, e.g. "CodeRibbonTheiaContribution implements CommandContribution"
export class CodeRibbonTheiaContribution{

  constructor(
    @inject(MessageService) private readonly messageService: MessageService,
  ) {}

  registerCommands(registry: CommandRegistry): void {
    registry.registerCommand(CodeRibbonHelloWorldCommand, {
      execute: () => this.messageService.info("CodeRibbon says hello!")
    });
  }

}
