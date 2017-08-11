import 'whatwg-fetch';
import ApiService from 'services/api-service';
import * as GithubEndpoints from 'helpers/enums/github-endpoints';

export default class GithubService {
  constructor() {
    this.apiService = new ApiService();
  }

  getMembers() {
    return this.apiService.get(GithubEndpoints.members, this.error);
  }

  getRepos(repo_url) {
    return this.apiService.get(repo_url, this.error);
  }

  error() {
    console.warn('error');
  }
}
