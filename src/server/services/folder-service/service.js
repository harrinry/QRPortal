const { FolderService: BaseFolderService } = require("../../lib/cnjs-utils/services/folder");
const types = require("./types");

class FolderService extends BaseFolderService {
  constructor(){
    super(__dirname);

    this.add(types.rest, this.fromRoot("rest"));
    this.add(types.restIndex, this.from(types.rest, "api"));
    this.add(types.restAip, this.from(types.rest, "AIP"));
    this.add(types.restCarl, this.from(types.rest, "CARL"));
    this.add(types.rootStatic, this.fromRoot("static"));
    this.add(types.swaggerUi, this.fromRoot("swagger-ui"));
    this.add(types.static, this.fromRoot("src", "static"));
    this.add(types.mapping, this.from(types.static, "mappings"));
  }
}

module.exports = FolderService;