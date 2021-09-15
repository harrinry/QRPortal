const { BaseSerializer } = require("../../lib/cnjs-utils/services/serializer");
const QualityRuleReference = require("./models/quality-rule-reference");

class QualityRuleReferenceSerializer extends BaseSerializer {
  
  constructor(){
    super(QualityRuleReference);
  }

  __serialize(data){
    const Ctor = this.Ctor;
    const model = new Ctor(data);

    return model;
  }
}

module.exports = QualityRuleReferenceSerializer;