class Televisor {
  private brand: string;
  private volume: number = 0;
  private channel: number = 1;
  private isOn: boolean = false;
  private isMuted: boolean = true;

  public constructor(brand: string) {
    this.brand = brand;
  }
  public switchPower(): void {
    this.isOn = !this.isOn;
  }
  private getTime(): string {
    const fullDate = new Date();
    return `${fullDate.getHours()}:${fullDate.getMinutes()}`;
  }
  public info(): void {
    if (this.isOn === false) {
      return;
    } else {
      console.log(`
                Channel: ${this.channel}
                Volume: ${this.volume}
                Hour: ${this.getTime()}
                -----------\n`);
    }
  }
  public channelUp(): void {
    if (this.channel === 99) {
      this.channel = 1;
    } else {
      this.channel += 1;
    }
  }
  public channelDown(): void {
    if (this.channel === 1) {
      this.channel = 99;
    } else {
      this.channel -= 1;
    }
  }
  public selectChannel(channelNumber: number) {
    if (channelNumber > 0 && channelNumber <= 99) {
      this.channel = channelNumber;
    }
  }
  public volumeUp() {
    if (this.volume < 100) {
      if (this.isMuted === true) {
        this.isMuted = false;
      }
      this.volume++;
      return;
    }
  }
  public volumeDown() {
    if (this.volume > 0) {
      this.volume--;
      return;
    } else {
      this.isMuted = true;
      return;
    }
  }
}