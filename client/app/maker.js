

const handleArmy = (e) => {
  e.preventDefault();
  
  $("domoMessage").animate({width:'hide'}, 350);
  
  if($("#listName").val() == '' || $("#listPoints").val() == ''){
    handleError("All fields are required!");
    return false;
  }
  
  sendAjax('POST', $("#armyForm").attr("action"), $("#armyForm").serialize(), function() {
    loadArmiesFromServer();
  });
};

const handleDetachment = (e) =>{
  e.preventDefault();
  
  $("domoMessage").animate({width:'hide'}, 350);
  
  if($("#detachmentType").val() =='' || $("#detachmentPoints").val() ==''){
    handleError("All fields are required!");
    return false;
  }
  console.dir($("#detachmentForm").attr("action"));
  
  sendAjax('POST', $("#detachmentForm").attr("action"), $("#detachmentForm").serialize(), function(){
    loadDetachmentsFromServer();
  });
};

const handleUnit = (e) =>{
  e.preventDefault();
  
  $("domoMessage").animate({width:'hide'},350);
  
  if($("unitName").val() == '' || $("#unitType").val() == '' || $("#unitPoints").val() == ''){
    handleError("All fields are required!");
    return false;
  }
  
  sendAjax('POST', $("#unitForm").attr("action"), $("#unitForm").serialize(),function() {
    loadUnitsFromServer();
  });
};

const handleModel = (e) =>{
  e.preventDefault();
  
  $("domoMessage").animate({width:'hide'},350);
  
  if($("modelName").val() == '' || $("#modelPoints").val() == '' || $("#modelQuantity").val() == ''){
    handleError("All fields are required!");
    return false;
  }
  
  sendAjax('POST', $("#modelForm").attr("action"), $("#modelForm").serialize(),function() {
    loadModelsFromServer();
  });
};


const ArmyForm = (props) => {
  return(
    <form id="armyForm"
      onSubmit={handleArmy}
      name="armyForm"
      action="/maker"
      method="POST"
      className="armyForm"
      >
      <label htmlFor="listName">List Name: </label>
      <input id="listName" type="text" name="listName" placeholder="My List"/>
      <label htmlFor="listFaction">Keyword: </label>
      <select id="listFaction" name="listFaction">
        <option value="Imperium" selected>Imperium</option>
        <option value="Tyranid">Tyranid</option>
        <option value="Dark Eldar">Dark Eldar</option>
        <option value="Ork">Ork</option>
        <option value="Chaos">Chaos</option>
        <option value="Eldar">Eldar</option>
        <option value="Tau">Tau</option>
        <option value="Necron">Necron</option>
      </select>
      <label htmlFor="listArmy">Army: </label>
      <select id="listArmy" name="listArmy">
        <option value="Space Marines"selected>Space Marines</option>
        <option value="Ultramarines">Ultramarines</option>
        <option value="Space Wolves">Space Wolves</option>
        <option value="Dark Angels">Dark Angels</option>
        <option value="Blood Angels">Blood Angels</option>
        <option value="Chaos Space Marines">Chaos Space Marines</option>
        <option value="Death Guard">Death Guard</option>
        <option value="Chaos Demons">Chaos Demons</option>
        <option value="Dark Eldar">Dark Eldar</option>
        <option value="Eldar">Eldar</option>
        <option value="Harlequins">Harlequins</option>
        <option value="Necrons">Necrons</option>
        <option value="Orks">Orks</option>
        <option value="Tau">Tau</option>
        <option value="Tyranids">Tyranids</option>
        <option value="Imperial Guard">Imperial Guard</option>
        <option value="Death Korps">Death Korps</option>
        <option value="Militarum Tempestus">Militarum Tempestus</option>
        <option value="Genestealer Cults">Genestealer Cults</option>
        <option value="Sisters of Battle">Sisters of Battle</option>
        <option value="Skitarii">Skitarii</option>
        <option value="Cult Mechanicus">Cult Mechanicus</option>
      </select>
      <label htmlFor="listSubFaction">SubFaction: </label>
      <input id="listSubFaction" type="text" name="listSubFaction"/>
      <label htmlFor="listPoints">Points: </label>
      <input id="listPoints" type="text" name="listPoints" placeholder="1000"/>
      <label htmlFor="listPower">Power: </label>
      <input id="listPower" type="text" name="listPower" placeholder="58"/>
      <input type="hidden" name="_csrf" value={props.csrf}/>
      <input className="makeArmySubmit" type="submit" value="Make Army"/>
    </form>
      );
};

const DetachmentForm = (props) =>{
  const ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  return(
    <form id="detachmentForm"
      onSubmit={handleDetachment}
      name="detachmentForm"
      action={"/detachments/"+ ownerString}
      method="POST"
      className="detachmentForm"
      >
      
      <label htmlFor="detachmentType">Detachment Type: </label>
      <select id="detachmentType" name="detachmentType">
        <option value="patrol" selected>Patrol Detachment</option>
        <option value="battalion">Battalion Detachment</option>
        <option value="brigade">Brigade Detachment</option>
        <option value="vanguard">Vanguard Detachment</option>
        <option value="spearhead">Spearhead Detachment</option>
        <option value="outrider">Outrider Detachment</option>
        <option value="command">Supreme Command Detachment</option>
        <option value="superheavy">Super-Heavy Detachment</option>
        <option value="superheavyauxiliary">Super-Heavy Auxiliary Detachment</option>
        <option value="airwing">Air Wing Detachment</option>
        <option value="fortification">Fortification Network</option>
        <option value="support">Auxiliary Support Detachments</option>
      </select>
      <label htmlFor="detachmentPoints">Detachment Points: </label>
      <input id="detachmentPoints" type="text" name="detachmentPoints" placeholder="100"/>
      <label htmlFor="detachmentPower">Detachment Power: </label>
      <input id="detachmentPower" type="text" name="detachmentPower" placeholder="0"/>
      <input type="hidden" name="_csrf" value={props.csrf}/>
      <input className="makeDetachmentSubmit" type="submit" value="Make Detachment"/>
    </form>
  );
};

const UnitForm = (props) =>{
  const ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  return(
    <form id="unitForm"
      onSubmit={handleUnit}
      name="unitForm"
      action={"/units/"+ownerString}
      method="POST"
      className="unitForm"
      >
      <label htmlFor="unitName">Unit Name: </label>
      <input id="unitName" type="text" name="unitName" placeholder="Infantry Squad"/>
      <label htmlFor="unitType">Unit Type: </label>
      <select id="unitType" name="unitType">
        <option value="hq">HQ</option>
        <option value="troop">Troops</option>
        <option value="elite">Elites</option>
        <option value="fastattack">Fast Attack</option>
        <option value="heavysupport">Heavy Support</option>
        <option value="flyer">Flyers</option>
        <option value="dedicatedtransport">Dedicated Transport</option>
        <option value="lordofwar">Lords of War</option>
        <option value="fortification">Fortifications</option>
      </select>
      <label htmlFor="unitPoints">Unit Points: </label>
      <input id="unitPoints" type="text" name="unitPoints" placeholder="100"/>
      <label htmlFor="unitPower">Unit Power: </label>
      <input id="unitPower" type="text" name="unitPower" placeholder="3"/>
      <label htmlFor="unitUpgrades">Unit Upgrades: </label>
      <input id="unitUpgrades" type="text" name="unitUpgrades" placeholder="none"/>
      <label htmlFor="unitUpgradesCost">Upgrade Costs: </label>
      <input id="unitUpgradesCost" type="text" name="unitUpgradesCost" placeholder="0"/>
      <label htmlFor="unitSpecialRules">Special Rules: </label>
      <input id="unitSpecialRules" type="text" name="unitSpecialRules" placeholder="Infantry"/>
      <input type="hidden" name="_csrf" value={props.csrf}/>
      <input className="makeUnitSubmit" type="submit" value="Make Unit"/>
    </form>
  );
};

const ModelForm = (props) =>{
  const ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  return(
    <form id="modelForm"
      onSubmit={handleModel}
      name="modelForm"
      action={"/models/"+ownerString}
      method="POST"
      className="modelForm"
      >
      <label htmlFor="modelName">Model Name: </label>
      <input id="modelName" type="text" name="modelName" placeholder="Guardsman"/>
      <label htmlFor="modelStats">Model Stats: </label>
      <input id="modelStats" type="text" name="modelStats" placeholder="Bs4+ Ws4+ W1 S3 T3 Ld7 Sv5+"/>
      <label htmlFor="modelPoints">Model Points: </label>
      <input id="modelPoints" type="text" name="modelPoints" placeholder="0"/>
      <label htmlFor="modelQuantity">Model Quantity: </label>
      <input id="modelQuantity" type="text" name="modelQuantity" placeholder="9"/>
      <label htmlFor="modelupgrades">Model Upgrades: </label>
      <input id="modelUpgrades" type="text" name="modelUpgrades" placeholder="Lasgun CCW Frags"/>
      <label htmlFor="modelUpgradesCost">Upgrade Costs: </label>
      <input id="modelUpgradesCost" type="text" name="modelUpgradesCost" placeholder="0"/>
      <input type="hidden" name="_csrf" value={props.csrf}/>
      <input className="makeModelSubmit" type="submit" value=" Make Model"/>
    </form>
  );
};

const ArmyList = function(props) {
  if(props.armies.length === 0) {
    return(
      <div className= "armyList">
        <h3 className= "emptyArmy">Make a List!</h3>
      </div>
    );
  }
  
  const armyNodes = props.armies.map(function(army){
    
    let factionIconString = "/assets/img/armies/";
    let codexIconString = "/assets/img/armies/";
    
    /**
    <option value="Imperium" selected>Imperium</option>
    <option value="Tyranid">Tyranid</option>
    <option value="Dark Eldar">Dark Eldar</option>
    <option value="Ork">Ork</option>
    <option value="Chaos">Chaos</option>
    <option value="Eldar">Eldar</option>
    <option value="Tau">Tau</option>
    <option value="Necron">Necron</option>
    **/
    
    
    switch(army.listFaction){
      case 'Imperium':
        factionIconString+='imperium.png';
        break;
      case 'Tyranid':
        factionIconString+='tyranid.png';
        break;
      case 'Dark Eldar':
        factionIconString+='darkeldar.png';
        break;
      case 'Ork':
        factionIconString+='ork.png';
        break;
      case 'Chaos':
        factionIconString+='chaosdemons.png';
        break;
      case 'Eldar':
        factionIconString+='eldar.png';
        break;
      case 'Tau':
        factionIconString+='tau.png';
        break;
      case 'Necron':
        factionIconString+='necron.png';
        break;
      default:
        factionIconString+='imperium.png';
        break;
    }
    /**
        <option value="Space Marines"selected>Space Marines</option>
        <option value="Ultramarines">Ultramarines</option>
        <option value="Space Wolves">Space Wolves</option>
        <option value="Dark Angels">Dark Angels</option>
        <option value="Blood Angels">Blood Angels</option>
        <option value="Chaos Space Marines">Chaos Space Marines</option>
        <option value="Death Guard">Death Guard</option>
        <option value="Chaos Demons">Chaos Demons</option>
        <option value="Dark Eldar">Dark Eldar</option>
        <option value="Eldar">Eldar</option>
        <option value="Harlequins">Harlequins</option>
        <option value="Necrons">Necrons</option>
        <option value="Orks">Orks</option>
        <option value="Tau">Tau</option>
        <option value="Tyranids">Tyranids</option>
        <option value="Imperial Guard">Imperial Guard</option>
        <option value="Death Korps">Death Korps</option>
        <option value="Militarum Tempestus">Militarum Tempestus</option>
        <option value="Genestealer Cults">Genestealer Cults</option>
        <option value="Sisters of Battle">Sisters of Battle</option>
        <option value="Skitarii">Skitarii</option>
        <option value="Cult Mechanicus">Cult Mechanicus</option>    
    **/
    
    
    switch(army.listArmy){
      case "Space Marines":
        codexIconString+="spacemarines.png";
        break;
      case "Ultramarines":
        codexIconString+="ultramarines.png";
        break;
      case "Space Wolves":
        codexIconString+="spacewolves.png";
        break;
      case "Dark Angels":
        codexIconString+="darkangels.png";
        break;
      case "Blood Angels":
        codexIconString+="bloodangels.png";
        break;
      case "Chaos Space Marines":
        codexIconString+="chaosspacemarines.png";
        break;
      case "Death Guard":
        codexIconString+="deathguard.png";
        break;
      case "Chaos Demons":
        codexIconString+="chaosdemons.png";
        break;
      case "Dark Eldar":
        codexIconString+="darkeldar.png";
        break;
      case "Eldar":
        codexIconString+="eldar.png";
        break;
      case "Harlequins":
        codexIconString+="harlequin.png";
        break;
      case "Necrons":
        codexIconString+="necron.png";
        break;
      case "Orks":
        codexIconString+="ork.png";
        break;
      case "Tau":
        codexIconString+="tau.png";
        break;
      case "Tyranids":
        codexIconString+="tyranid.png";
        break;
      case "Imperial Guard":
        codexIconString+="imperialguard.png";
        break;
      case "Death Korps":
        codexIconString+="deathkorps.jpeg";
        break;
      case "Militarum Tempestus":
        codexIconString+="militarumtempestus.png";
        break;
      case "Genestealer Cults":
        codexIconString+="tyranid.png";
        break;
      case "Sisters of Battle":
        codexIconString+="sistersofbattle.jpeg";
        break;
      case "Skitarii":
        codexIconString+="skitarii.png";
        break;
      case "Cult Mechanicus":
        codexIconString+="cultmechanicus.png";
        break;
      default:
        codexIconString+='spacemarines.png';
        break;
    }
    
    return(
      <div key={army._id} className="army">
        <h3 className="listName">{army.listName}</h3>
        <div className="itemContent">
          <h3 className="listFaction">Keyword: {army.listFaction}<img className="factionIcon" src={factionIconString}/></h3>
          <h3 className="listArmy">Codex: {army.listArmy}<img className="codexIcon" src={codexIconString}/></h3>
          <h3 className="listSubFaction">Doctrines: {army.listSubFaction}</h3>
        </div>
        <div className="itemPointsPower">
          <h3 className="listPoints">Points: {army.listPoints}</h3>
          <h3 className="listPower">Power: {army.listPower}</h3>
        </div>
        <div className="itemImages">
          <a className="armyId" className="deleteImg" href={"/delete/"+ army._id}><img src="/assets/img/minus.png"/></a>
          <a className="armyId" className="addImg" href={"/detachments/"+ army._id}><img src="/assets/img/plus.png"/></a>
        </div>
        
      </div>
    );
  });
  
  return(
    <div className="armyList">
      {armyNodes}
    </div>
  );
};

const DetachmentList = function(props) {
  if(props.detachments.length === 0) {
    return(
    <div className= "detachmentList">
      <h3 className= "emptyDetachment">Add a Detachment!</h3>
    </div>
    );
  }
  
  
  const detachmentNodes = props.detachments.map(function(detachment){
    console.dir(detachment);
    
    const ownerString = window.location.pathname.split('/')[2];
    console.log(ownerString);
    
    let detachmentIconString = "/assets/img/detachments/";
    
    /**
        <option value="patrol" selected>Patrol Detachment</option>
        <option value="battalion">Battalion Detachment</option>
        <option value="brigade">Brigade Detachment</option>
        <option value="vanguard">Vanguard Detachment</option>
        <option value="spearhead">Spearhead Detachment</option>
        <option value="outrider">Outrider Detachment</option>
        <option value="command">Supreme Command Detachment</option>
        <option value="superheavy">Super-Heavy Detachment</option>
        <option value="airwing">Air Wing Detachment</option>
        <option value="fortification">Fortification Network</option>
        <option value="support">Auxiliary Support Detachments</option>   
    **/
    
    switch(detachment.detachmentType){
      case "patrol":
        detachmentIconString+="patrolDetachment.png";
        break;
      case "battalion":
        detachmentIconString+="battalionDetachment.png";
        break;
      case "brigade":
        detachmentIconString+="brigadeDetachment.png";
        break;
      case "vanguard":
        detachmentIconString+="vanguardDetachment.png";
        break;
      case "spearhead":
        detachmentIconString+="spearheadDetachment.png";
        break;
      case "outrider":
        detachmentIconString+="outriderDetachment.png";
        break;
      case "command":
        detachmentIconString+="supremecommandDetachment.png";
        break;
      case "superheavy":
        detachmentIconString+="superheavyDetachment.png";
        break;
      case "superheavyauxiliary":
        detachmentIconString+="superheavyauxiliaryDetachment.png";
        break;
      case "airwing":
        detachmentIconString+="airwingDetachment.png";
        break;
      case "fortification":
        detachmentIconString+="fortificationNetwork.png";
        break;
      case "support":
        detachmentIconString+="auxiliarysupportDetachment.png";
        break;
      default:
        detachmentIconString+="patrolDetachment.png";
        break;
    }
    
    return(
      <div key={detachment._id} className="detachment">
        <img id="detachmentIcon" className="detachmentIcon" src={detachmentIconString}/>
        <div className="itemPointsPower">
          <h3 className="detachmentPoints">Points: {detachment.detachmentPoints}</h3>
          <h3 className="detachmentPower">Power: {detachment.detachmentPower}</h3>
        </div>
        <div className="itemImages">
          <a className="detachmentId" className="deleteImg" href={"/deleteDetachment/"+detachment._id +'/'+ownerString}><img src="/assets/img/minus.png"/></a>
          <a className="detachmentId" className="addImg" href={"/units/"+detachment._id}><img src="/assets/img/plus.png"/></a>
        </div>
        
      </div>
    );
  });
  return(
    <div className="detachmentList">
      {detachmentNodes}
    </div>
  );
};

const UnitList = function(props) {
  if(props.units.length === 0) {
    return(
      <div className = "unitList">
        <h3 className= "emptyUnit">Add a Unit!</h3>
      </div>
    );
  }
  
  const unitNodes = props.units.map(function(unit){
    console.dir(unit);
    
    const ownerString = window.location.pathname.split('/')[2];
    console.log(ownerString);
    
    let unitTypeIconString = "/assets/img/units/";
    
    /**
    <option value="hq">HQ</option>
    <option value="troop">Troops</option>
    <option value="elite">Elites</option>
    <option value="fastattack">Fast Attack</option>
    <option value="heavysupport">Heavy Support</option>
    <option value="flyer">Flyers</option>
    <option value="dedicatedtransport">Dedicated Transport</option>
    <option value="lordofwar">Lords of War</option>
    <option value="fortification">Fortifications</option>    
    **/
    
    switch(unit.unitType){
      case "hq":
        unitTypeIconString+="hq.png";
        break;
      case "troop":
        unitTypeIconString+="troop.png";
        break;
      case "elite":
        unitTypeIconString+="elite.png";
        break;
      case "fastattack":
        unitTypeIconString+="fastattack.png";
        break;
      case "heavysupport":
        unitTypeIconString+="heavySupport.png";
        break;
      case "flyer":
        unitTypeIconString+="flyer.png";
        break;
      case "dedicatedtransport":
        unitTypeIconString+="dedicatedtransport.png";
        break;
      case "lordofwar":
        unitTypeIconString+="lordofwar.png";
        break;
      case "fortification":
        unitTypeIconString+="fortification.png";
        break;
      default:
        unitTypeIconString+="troop.png";
        break;
    }
    
    return(
      <div key={unit._id} className="unit">
        <h3 className="unitName">{unit.unitName}</h3>
        <div className="itemContent">
          <h3 className="unitType"><img id="unitTypeIcon" src={unitTypeIconString}/></h3>          
          <h3 className="unitUpgrades">Upgrades: {unit.unitUpgrades}</h3>
          <h3 className="unitUpgradesCost">Upgrades Cost: {unit.unitUpgradesCost}</h3>
          <h3 className="unitSpecialRules">Special Rules: {unit.unitSpecialRules}</h3>
        </div>
        
        <div className="itemPointsPower">
          <h3 className="unitPoints">Points: {unit.unitPoints}</h3>
          <h3 className="unitPower">Power: {unit.unitPower}</h3>
        </div>
        
        <div className="itemImages">
          <a className="unitId" className="deleteImg" href={"/deleteUnit/"+unit._id +'/'+ownerString}><img src="/assets/img/minus.png"/></a>
          <a className="unitId" className="addImg" href={"/models/"+unit._id}><img src="/assets/img/plus.png"/></a>
        </div>
        
      </div>
    );
  });
  return(
    <div className="unitList">
      {unitNodes}
    </div>
  );
};

const ModelList = function(props) {
  if(props.models.length === 0) {
    return(
      <div className= "modelList">
        <h3 className = "emptyModel">Add a Model!</h3>
      </div>
    );
  }

  
  const modelNodes = props.models.map(function(model){
    console.dir(model);
    
    const ownerString = window.location.pathname.split('/')[2];
    console.log(ownerString);
    
    return(
      <div key={model._id} className="model">
        <h3 className="modelName">{model.modelGnome}</h3>
        
        <div className="itemContent">
          <h3 className="modelStats">Stats: {model.modelStats}</h3>
          <h3 className="modelQuantity">#: {model.modelQuantity}</h3>
          <h3 className="modelUpgrades">Upgrades: {model.modelUpgrades}</h3>
          <h3 className="modelUpgradesCost">Upgrades Cost: {model.modelUpgradesCost}</h3>

        </div>
        
        <div className="itemPointsPower">
          <h3 className="modelPoints">Points: {model.modelPoints}</h3>
        </div>
        
        <div className="itemImages">
          <a className="modelId" className="deleteImg" href={"/deleteModel/"+model._id +'/'+ownerString}><img src="/assets/img/minus.png"/></a>
        </div>
      </div>
    );
  });
  return(
    <div className="modelList">
      {modelNodes}
    </div>
  );
};

const loadArmiesFromServer = () =>{
  sendAjax('GET', '/getArmies', null, (data) =>{
    console.log('loading armies from server:');
    console.dir(data.armies);
    ReactDOM.render(
      <ArmyList armies={data.armies}/>,
      document.querySelector("#armies")
    );
  });
};

const loadDetachmentsFromServer = () =>{
  const ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  const fullString = '/getDetachments/'+ownerString;
  
  sendAjax('GET', fullString, null,(data) =>{
    console.log('loading detachments from server:');
    console.dir(data.detachments);
    ReactDOM.render(
      <DetachmentList detachments={data.detachments}/>,
      document.querySelector("#armies")
    );
  });
};

const loadUnitsFromServer = () => {
  const ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  const fullString = '/getUnits/'+ownerString;
  
  sendAjax('GET', fullString, null,(data) =>{
    console.log('loading units from server:');
    console.dir(data.units);
    ReactDOM.render(
      <UnitList units={data.units}/>,
      document.querySelector("#armies")
    );
  });
};

const loadModelsFromServer = () => {
  const ownerString = window.location.pathname.split('/')[2];
  console.log(ownerString);
  const fullString = '/getModels/'+ownerString;
  
  sendAjax('GET', fullString, null,(data) =>{
    console.log('loading models from server:');
    console.dir(data.models);
    ReactDOM.render(
      <ModelList models={data.models}/>,
      document.querySelector("#armies")
    );
  });
};

const handlePassChange = (e) => {
  e.preventDefault();
  
  $("#domoMessage").animate({width: 'hide'}, 350);
  
  if ($("#oldpass").val() == '' || $("#pass").val() == '' || $("#pass2").val() == '') {
    handleError("ERROR! Missing data detected!");
    return false;
  }
  
  if ($("#pass").val() !== $("#pass2").val()) {
    handleError("ERROR! Passwords must match!");
    return false;
  }
  
  sendAjax('POST', $("#passchangeForm").attr("action"), $("#passchangeForm").serialize(), redirect);
  
  return false
}

const PasschangeWindow = (props) => {
  return (
    <form 
    id = "passchangeForm"
    name = "passchangeForm"
    onSubmit = {
      handlePassChange
    }
    action = "/changepass"
    method = "POST"
    className = "mainForm" 
    >
    <label htmlFor="oldpass">Old Password: </label>
    <input id="oldpass" type="text" name="oldpass" placeholder="old password"/>
    <label htmlFor="pass">Password: </label>
    <input id="pass" type="password" name="pass" placeholder="password"/>
    <label htmlFor="pass2">Password: </label>
    <input id="pass2" type="password" name="pass2" placeholder="retype password"/>
    <input type="hidden" name ="_csrf" value={props.csrf}/>
    <input className="formSubmit" type="submit" value="Change" />
    
    </form>
    
  );
};


const createPasschangeWindow = (csrf) => {
  ReactDOM.render(
  <PasschangeWindow csrf={csrf} />,
    document.querySelector("#content")
  );
};

const setup = function(csrf) {
  const passchangeButton = document.querySelector("#passchangeButton");

  
  switch(page){
    case 'detachments':
      ReactDOM.render(
        <DetachmentForm csrf={csrf} />,
        document.querySelector("#makeArmy")
      );
      ReactDOM.render(
        <DetachmentList detachments={[]}/>,
        document.querySelector('#armies')
      );
      loadDetachmentsFromServer();
      break;
    case 'units':
      ReactDOM.render(
        <UnitForm csrf={csrf} />,
        document.querySelector("#makeArmy")
      );
      ReactDOM.render(
        <UnitList units={[]}/>,
        document.querySelector("#armies")
      );
      loadUnitsFromServer();
      break;
    case 'models':
      ReactDOM.render(
        <ModelForm csrf={csrf} />,
        document.querySelector("#makeArmy")
      );
      ReactDOM.render(
        <ModelList models={[]}/>,
        document.querySelector("#armies")
      );
      loadModelsFromServer();
      break;
    default:
      ReactDOM.render(
        <ArmyForm csrf={csrf} />,
        document.querySelector("#makeArmy")
      );
      ReactDOM.render(
        <ArmyList armies={[]}/>,
        document.querySelector('#armies')
      );
  
      loadArmiesFromServer();
      break;
  }
  
  passchangeButton.addEventListener("click", (e) =>{
    e.preventDefault();
    createPasschangeWindow(csrf);
    return false;
  });
  
};

const getToken = () =>{
  sendAjax('GET', '/getToken', null, (result) =>{
    setup(result.csrfToken);
  });
};

$(document).ready(function(){
  getToken();
});
