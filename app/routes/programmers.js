import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model() {
        return ['Linus Torvalds', 'Grace Hopper', 'Steve Wozniak'];
    }
}
