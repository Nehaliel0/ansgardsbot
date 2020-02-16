const Potion = require('../classes/Potion');
const Object = require('../classes/Object');
const ItemValues = require('../utils/items/Values');

/**
 * Represents an Inventory. Store the id of the objects the user have in its inventory. An item id is also an ID
 */
class Inventory {

    constructor(playerId, weaponId, armorId, potionId, objectId, backupItemId, lastDaily) {
        this.playerId = playerId;
        this.weaponId = weaponId;
        this.armorId = armorId;
        this.potionId = potionId;
        this.objectId = objectId;
        this.backupItemId = backupItemId;
        this.lastDaily = lastDaily;
    }


    /**
     * Returns the id of the player that own this inventory
     * @returns {Number} - The id of the player
     */
    getplayerId() {
        return this.playerId;
    }


    /**
     * Returns the weapon id that is present in this inventory
     * @returns {String} - The weapon id
     */
    getWeaponId() {
        return this.weaponId;
    }


    /**
     * Returns the armor id that is present in this inventory
     * @returns {String} - The armor id
     */
    getArmorId() {
        return this.armorId;
    }


    /**
     * Returns the potion that is present in this inventory
     * @returns {String} - The potion id
     */
    getPotionId() {
        return this.potionId;
    }


    /**
     * Returns the object that is present in this inventory
     * @returns {String} - The object id
     */
    getObjectId() {
        return this.objectId;
    }


    /**
     * Returns the backupItem that is present in this inventory
     * @returns {String} - The backupItem id
     */
    getBackupItemId() {
        return this.backupItemId;
    }

    /**
     * Returns the number of the day where the last daily has been asked 
     * @returns {String} - The last daily day
     */
    getBackupItemId() {
        return this.backupItemId;
    }


    /**
     * Save a weapon id in the weapon slot of the inventory
     * @param {String} weaponId - The weapon id that has to be saved
     */
    setWeaponId(weaponId) {
        this.weaponId = weaponId;
    }


    /**
     * Save a armor in the armor slot of the inventory
     * @param {String} armorId - The armor id that has to be saved
     */
    setArmorId(armorId) {
        this.armorId = armorId;
    }


    /**
     * Save a potion in the potion slot of the inventory
     * @param {String} potionId - The potion id that has to be saved
     */
    setPotionId(potionId) {
        this.potionId = potionId;
    }


    /**
     * Save a object in the object slot of the inventory
     * @param {String} ObjectId - The Object id that has to be saved
     */
    setObjectId(ObjectId) {
        this.ObjectId = ObjectId;
    }

    /**
     * Save a backupItem in the backupItem slot of the inventory
     * @param {String} backupItemId - The BackupItem id that has to be saved
     */
    setBackupItemId(backupItemId) {
        this.backupItemId = backupItemId;
    }

    /**
     * Save the day that the last daily has been asked
     * @param {Integer} lastDaily - The number of the day
     */
    setLastDaily(lastDaily) {
        this.backupItemId = backupItemId;
    }

    /**
     * Return the contained potion as an object
     * @returns {*} the potion
     */
    getPotion() {
        return new Potion(this.potionId, parseInt(ItemValues.potion[this.potionId].rareness), parseInt(ItemValues.potion[this.potionId].power), parseInt(ItemValues.potion[this.potionId].nature))
    }

    /**
     * Return the contained object as an object
     * @returns {*} the current active object
     */
    getCurrentObject() {
        return new Object(this.objectId, parseInt(ItemValues.object[this.objectId].rareness), parseInt(ItemValues.object[this.objectId].power), parseInt(ItemValues.object[this.objectId].nature))
    }
}

module.exports = Inventory;