/* ************************************************************************
SINGLETON CLASS DEFINITION
************************************************************************ */
pluginManager.instance = null;
 
/**
 * Singleton getInstance definition
 * @return pluginManager class
 */
pluginManager.getInstance = function(){
    if(this.instance === null){
        this.instance = new pluginManager();
        this.instance.extendModule("pluginManager", this.instance);
    }
    return this.instance;
}
 
module.exports = pluginManager.getInstance();
