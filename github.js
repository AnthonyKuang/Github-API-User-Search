class Github {
  constructor() {
    this.client_id = 'b1e980efb4bc1fa78dba';
    this.client_secret = 'eff3c3a5ea76283ad3a5d54182e5b7949158166e';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return {
      profile
    }
  }
}