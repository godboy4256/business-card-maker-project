import { fireBaseAuth,githubProvider,googleProvider } from "./firebase";


class AuthService{
    login(providerName){
        const authProvider = this.getProvider(providerName)
        return fireBaseAuth.signInWithPopup(authProvider);
    }

    logout(){
        fireBaseAuth.signOut()
    }

    onAuthChange(onUserChanged){
        fireBaseAuth.onAuthStateChanged(user => {
            onUserChanged(user)
        })
    }

    getProvider(providerName){
        switch(providerName){
            case 'Google':
            return googleProvider;
            case 'Github':
            return githubProvider;
            default:
            throw new Error(`not suported provider ${providerName}`)
        }
    }

}

export default AuthService;