import IDal from 'src/dal/IDal';
import Dal from 'src/dal/memory/Dal';

class AppStore{
    private dal: IDal = new Dal();

    /**
     * getAuthors
     */
    public getAuthors() {
        return this.dal.getAuthors();
    }
}

export default new AppStore()