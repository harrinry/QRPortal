
class LocalIconURLBuilder {
  constructor(baseUrl, fileExtension){
    this.baseUrl = baseUrl;
    this.fileExtension = fileExtension;
  }

  createIconUrl(id){
    return `${this.baseUrl}/${id}.${this.fileExtension}`;
  }
}

module.exports = LocalIconURLBuilder;